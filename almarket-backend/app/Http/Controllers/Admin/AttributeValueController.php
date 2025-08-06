<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\AttributeValueRequest;
use App\Http\Resources\AttributeValueResource;
use App\Models\AttributeValue;
use Illuminate\Http\Request;

class AttributeValueController extends Controller
{
    public function index()
    {
        $values = AttributeValue::all();
        return AttributeValueResource::collection($values);
    }

    public function store(AttributeValueRequest $request)
    {
        $data = $request->validated();
        $value = AttributeValue::create($data);
        return new AttributeValueResource($value);
    }

    public function show(AttributeValue $attributeValue)
    {
        return new AttributeValueResource($attributeValue);
    }

    public function update(AttributeValueRequest $request, AttributeValue $attributeValue)
    {
        $data = $request->validated();
        $attributeValue->update($data);
        return new AttributeValueResource($attributeValue);
    }

    public function destroy(AttributeValue $attributeValue)
    {
        $attributeValue->delete();
        return response()->json(null, 204);
    }
}
