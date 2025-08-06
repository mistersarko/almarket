<?php

namespace App\Http\Controllers;

use App\Http\Resources\NotificationResource;
use App\Models\Customer;
use Illuminate\Http\Request;

class CustomerNotificationController extends Controller
{
    public function index(Customer $customer)
    {
        $notifications = $customer->notifications()->latest()->get();
        return NotificationResource::collection($notifications);
    }

    public function destroy(Customer $customer)
    {
        $customer->notifications()->delete();
        return response()->json(null, 204);
    }
}
