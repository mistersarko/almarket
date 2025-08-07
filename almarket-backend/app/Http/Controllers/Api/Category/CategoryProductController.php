<?php

namespace App\Http\Controllers\Api\Category;

use App\Http\Controllers\Controller;
use App\Http\Resources\Product\ProductResource;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryProductController extends Controller
{
    public function __invoke(Request $request, Category $category)
    {
        $products = $category->products()
            ->with(['category', 'merchant'])
            ->latest()
            ->paginate($request->get('per_page', 10));

        return ProductResource::collection($products);
    }
}