<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class VerificationController extends Controller
{
    public function verifyPhone(Request $request)
    {
        $request->validate([
            'phone' => 'required|exists:users,phone',
            'code' => 'required'
        ]);

        $user = User::where('phone', $request->phone)->first();

        if (!$user || $user->verification_code !== $request->code) {
            return response()->json(['message' => 'Invalid code'], 422);
        }

        $user->phone_verified_at = now();
        $user->save();

        return response()->json(['message' => 'Phone verified']);
    }

    public function resendCode(Request $request)
    {
        $request->validate([
            'phone' => 'required|exists:users,phone'
        ]);

        $user = User::where('phone', $request->phone)->first();
        $user->sendVerificationCode();

        return response()->json(['message' => 'Verification code resent']);
    }
}
