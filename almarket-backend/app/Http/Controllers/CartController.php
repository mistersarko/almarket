<?php

namespace App\Http\Controllers;

use App\Http\Requests\CartRequest;
use App\Http\Resources\CartResource;
use App\Models\Cart;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function index()
    {
        $carts = Cart::all();
        return CartResource::collection($carts);
    }

    public function store(CartRequest $request)
    {
        $data = $request->validated();
        $cart = Cart::create($data);
        return new CartResource($cart);
    }

    public function show(Cart $cart)
    {
        return new CartResource($cart);
    }

    public function update(CartRequest $request, Cart $cart)
    {
        $data = $request->validated();
        $cart->update($data);
        return new CartResource($cart);
    }

    public function destroy(Cart $cart)
    {
        $cart->delete();
        return response()->json(null, 204);
    }
}
