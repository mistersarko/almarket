<?php

namespace App\Http\Controllers;

use App\Http\Requests\CouponRequest;
use App\Http\Resources\CouponResource;
use App\Models\Coupon;
use Illuminate\Http\Request;

class CouponController extends Controller
{
    public function index()
    {
        $coupons = Coupon::all();
        return CouponResource::collection($coupons);
    }

    public function store(CouponRequest $request)
    {
        $data = $request->validated();
        $coupon = Coupon::create($data);
        return new CouponResource($coupon);
    }

    public function show(Coupon $coupon)
    {
        return new CouponResource($coupon);
    }

    public function update(CouponRequest $request, Coupon $coupon)
    {
        $data = $request->validated();
        $coupon->update($data);
        return new CouponResource($coupon);
    }

    public function destroy(Coupon $coupon)
    {
        $coupon->delete();
        return response()->json(null, 204);
    }
}
