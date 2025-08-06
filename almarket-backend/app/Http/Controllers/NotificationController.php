<?php

namespace App\Http\Controllers;

use App\Http\Requests\NotificationRequest;
use App\Http\Resources\NotificationResource;
use App\Models\Notification;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    public function index()
    {
        $notifications = Notification::all();
        return NotificationResource::collection($notifications);
    }

    public function store(NotificationRequest $request)
    {
        $data = $request->validated();
        $notification = Notification::create($data);
        return new NotificationResource($notification);
    }

    public function show(Notification $notification)
    {
        return new NotificationResource($notification);
    }

    public function update(NotificationRequest $request, Notification $notification)
    {
        $data = $request->validated();
        $notification->update($data);
        return new NotificationResource($notification);
    }

    public function destroy(Notification $notification)
    {
        $notification->delete();
        return response()->json(null, 204);
    }
}
