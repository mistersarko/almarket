<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use App\Models\Category;
use App\Models\Customer;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Http\JsonResponse;

class DashboardController extends Controller
{
    public function __invoke(): JsonResponse
    {
        return response()->json([
            'customers_count' => Customer::count(),
            'orders_count' => Order::count(),
            'categories_count' => Category::count(),
            'brands_count' => Brand::count(),
            'products_count' => Product::count(),
        ]);
    }
}
