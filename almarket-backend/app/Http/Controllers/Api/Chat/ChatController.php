<?php

namespace App\Http\Controllers\Api\Chat;

use App\Events\MessageSent;
use App\Http\Controllers\Controller;
use App\Models\Chat;
use App\Models\Message;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ChatController extends Controller
{
    public function index()
    {
        $user = Auth::user();

        $chats = Chat::with(['users', 'messages' => function ($query) {
            $query->latest()->limit(1);
        }])->whereHas('users', function ($query) use ($user) {
            $query->where('user_id', $user->id);
        })->get();

        return response()->json($chats);
    }

    public function show($id)
    {
        $chat = Chat::with('users', 'messages')->findOrFail($id);

        return response()->json($chat);
    }

    public function store(Request $request)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
        ]);

        $authUser = Auth::user();

        $chat = Chat::whereHas('users', function ($query) use ($authUser) {
            $query->where('user_id', $authUser->id);
        })->whereHas('users', function ($query) use ($request) {
            $query->where('user_id', $request->user_id);
        })->first();

        if (!$chat) {
            $chat = Chat::create();
            $chat->users()->attach([$authUser->id, $request->user_id]);
        }

        return response()->json($chat->load('users', 'messages'));
    }

    public function sendMessage(Request $request, $chatId)
    {
        $request->validate([
            'message' => 'required|string',
        ]);

        $chat = Chat::findOrFail($chatId);

        $message = Message::create([
            'chat_id' => $chat->id,
            'user_id' => Auth::id(),
            'message' => $request->message,
        ]);

        broadcast(new MessageSent($message))->toOthers();

        return response()->json($message);
    }
}