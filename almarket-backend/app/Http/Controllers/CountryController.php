<?php

namespace App\Http\Controllers;

use App\Http\Requests\CountryRequest;
use App\Http\Resources\CountryResource;
use App\Models\Country;
use Illuminate\Http\Request;

class CountryController extends Controller
{
    public function index()
    {
        $countries = Country::all();
        return CountryResource::collection($countries);
    }

    public function store(CountryRequest $request)
    {
        $data = $request->validated();
        $country = Country::create($data);
        return new CountryResource($country);
    }

    public function show(Country $country)
    {
        return new CountryResource($country);
    }

    public function update(CountryRequest $request, Country $country)
    {
        $data = $request->validated();
        $country->update($data);
        return new CountryResource($country);
    }

    public function destroy(Country $country)
    {
        $country->delete();
        return response()->json(null, 204);
    }
}
