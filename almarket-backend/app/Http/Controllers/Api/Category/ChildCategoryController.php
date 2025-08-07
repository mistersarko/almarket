<?php

namespace App\Http\Controllers\Api\Category;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class ChildCategoryController extends Controller
{
    public function __invoke($id)
    {
        $category = Category::with('children')->findOrFail($id);

        return response()->json($category->children);
    }
}