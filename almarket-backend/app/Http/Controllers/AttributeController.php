<?php

namespace App\Http\Controllers;

use App\Http\Requests\AttributeRequest;
use App\Http\Resources\AttributeResource;
use App\Models\Attribute;
use Illuminate\Http\Request;

class AttributeController extends Controller
{
    public function index()
    {
        $attributes = Attribute::all();
        return AttributeResource::collection($attributes);
    }

    public function store(AttributeRequest $request)
    {
        $data = $request->validated();
        $attribute = Attribute::create($data);
        return new AttributeResource($attribute);
    }

    public function show(Attribute $attribute)
    {
        return new AttributeResource($attribute);
    }

    public function update(AttributeRequest $request, Attribute $attribute)
    {
        $data = $request->validated();
        $attribute->update($data);
        return new AttributeResource($attribute);
    }

    public function destroy(Attribute $attribute)
    {
        $attribute->delete();
        return response()->json(null, 204);
    }
}
