<?php

namespace App\Http\Controllers;

use App\Http\Requests\OptionRequest;
use App\Http\Resources\OptionResource;
use App\Models\Option;
use Illuminate\Http\Request;

class OptionController extends Controller
{
    public function index()
    {
        $options = Option::all();
        return OptionResource::collection($options);
    }

    public function store(OptionRequest $request)
    {
        $data = $request->validated();
        $option = Option::create($data);
        return new OptionResource($option);
    }

    public function show(Option $option)
    {
        return new OptionResource($option);
    }

    public function update(OptionRequest $request, Option $option)
    {
        $data = $request->validated();
        $option->update($data);
        return new OptionResource($option);
    }

    public function destroy(Option $option)
    {
        $option->delete();
        return response()->json(null, 204);
    }
}
