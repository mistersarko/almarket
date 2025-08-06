<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use App\Models\Customer;
use App\Models\Product;
use Illuminate\Http\Request;

class FavoriteController extends Controller
{
    public function index(Customer $customer)
    {
        $favorites = $customer->favorites()->latest()->get();
        return ProductResource::collection($favorites);
    }

    public function store(Request $request, Customer $customer)
    {
        $request->validate(['product_id' => 'required|exists:products,id']);
        $customer->favorites()->syncWithoutDetaching([$request->product_id]);
        return response()->json(['message' => 'Product added to favorites.']);
    }

    public function destroy(Request $request, Customer $customer)
    {
        $request->validate(['product_id' => 'required|exists:products,id']);
        $customer->favorites()->detach($request->product_id);
        return response()->json(['message' => 'Product removed from favorites.']);
    }
}
