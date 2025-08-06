<?php

namespace App\Http\Controllers;

use App\Http\Requests\CharacteristicRequest;
use App\Http\Resources\CharacteristicResource;
use App\Models\Characteristic;
use Illuminate\Http\Request;

class CharacteristicController extends Controller
{
    public function index()
    {
        $characteristics = Characteristic::all();
        return CharacteristicResource::collection($characteristics);
    }

    public function store(CharacteristicRequest $request)
    {
        $data = $request->validated();
        $characteristic = Characteristic::create($data);
        return new CharacteristicResource($characteristic);
    }

    public function show(Characteristic $characteristic)
    {
        return new CharacteristicResource($characteristic);
    }

    public function update(CharacteristicRequest $request, Characteristic $characteristic)
    {
        $data = $request->validated();
        $characteristic->update($data);
        return new CharacteristicResource($characteristic);
    }

    public function destroy(Characteristic $characteristic)
    {
        $characteristic->delete();
        return response()->json(null, 204);
    }
}
