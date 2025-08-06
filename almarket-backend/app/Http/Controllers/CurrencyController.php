<?php

namespace App\Http\Controllers;

use App\Http\Requests\CurrencyRequest;
use App\Http\Resources\CurrencyResource;
use App\Models\Currency;
use Illuminate\Http\Request;

class CurrencyController extends Controller
{
    public function index()
    {
        $currencies = Currency::all();
        return CurrencyResource::collection($currencies);
    }

    public function store(CurrencyRequest $request)
    {
        $data = $request->validated();
        $currency = Currency::create($data);
        return new CurrencyResource($currency);
    }

    public function show(Currency $currency)
    {
        return new CurrencyResource($currency);
    }

    public function update(CurrencyRequest $request, Currency $currency)
    {
        $data = $request->validated();
        $currency->update($data);
        return new CurrencyResource($currency);
    }

    public function destroy(Currency $currency)
    {
        $currency->delete();
        return response()->json(null, 204);
    }
}
