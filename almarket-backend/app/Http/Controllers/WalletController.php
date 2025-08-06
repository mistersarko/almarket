<?php

namespace App\Http\Controllers;

use App\Http\Requests\WalletRequest;
use App\Http\Resources\WalletResource;
use App\Models\Wallet;
use Illuminate\Http\Request;

class WalletController extends Controller
{
    public function index()
    {
        $wallets = Wallet::all();
        return WalletResource::collection($wallets);
    }

    public function store(WalletRequest $request)
    {
        $data = $request->validated();
        $wallet = Wallet::create($data);
        return new WalletResource($wallet);
    }

    public function show(Wallet $wallet)
    {
        return new WalletResource($wallet);
    }

    public function update(WalletRequest $request, Wallet $wallet)
    {
        $data = $request->validated();
        $wallet->update($data);
        return new WalletResource($wallet);
    }

    public function destroy(Wallet $wallet)
    {
        $wallet->delete();
        return response()->json(null, 204);
    }
}
