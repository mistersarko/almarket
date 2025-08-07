<?php

namespace App\Traits;

trait ApiResponse
{
    public function success($data = [], $message = 'Success', $code = 200)
    {
        return response()->json([
            'status'  => 'success',
            'message' => $message,
            'data'    => $data
        ], $code);
    }

    public function error($message = 'Error', $code = 400, $data = [])
    {
        return response()->json([
            'status'  => 'error',
            'message' => $message,
            'data'    => $data
        ], $code);
    }
}