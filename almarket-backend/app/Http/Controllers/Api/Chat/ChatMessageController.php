<?php

namespace App\Http\Controllers\Api\Chat;

use App\Events\MessageSent;
use App\Http\Controllers\Controller;
use App\Models\Chat;
use App\Models\ChatMessage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ChatMessageController extends Controller
{
    public function store(Request $request, Chat $chat)
    {
        $request->validate([
            'message' => 'required|string',
        ]);

        if (! $chat->users->contains(Auth::id())) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        $message = new ChatMessage();
        $message->chat_id = $chat->id;
        $message->user_id = Auth::id();
        $message->message = $request->message;
        $message->save();

        $message->load('user');

        broadcast(new MessageSent($message))->toOthers();

        return response()->json($message);
    }
}