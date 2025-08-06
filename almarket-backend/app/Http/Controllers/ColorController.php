<?php

namespace App\Http\Controllers;

use App\Http\Requests\ColorRequest;
use App\Http\Resources\ColorResource;
use App\Models\Color;
use Illuminate\Http\Request;

class ColorController extends Controller
{
    public function index()
    {
        $colors = Color::all();
        return ColorResource::collection($colors);
    }

    public function store(ColorRequest $request)
    {
        $data = $request->validated();
        $color = Color::create($data);
        return new ColorResource($color);
    }

    public function show(Color $color)
    {
        return new ColorResource($color);
    }

    public function update(ColorRequest $request, Color $color)
    {
        $data = $request->validated();
        $color->update($data);
        return new ColorResource($color);
    }

    public function destroy(Color $color)
    {
        $color->delete();
        return response()->json(null, 204);
    }
}
