<?php

namespace App\Http\Controllers\Api\Category;

use App\Http\Controllers\Controller;
use App\Http\Resources\Category\CategoryTreeResource;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryTreeController extends Controller
{
    public function __invoke()
    {
        $categories = Category::with('children.children')
            ->whereNull('parent_id')
            ->get();

        return CategoryTreeResource::collection($categories);
    }
}