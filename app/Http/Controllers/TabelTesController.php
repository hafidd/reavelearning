<?php

namespace App\Http\Controllers;

use App\Http\Resources\TabelTesResource;
use App\TabelTes;
use Illuminate\Http\Request;

class TabelTesController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return TabelTesResource::collection(TabelTes::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $tes = TabelTes::create([
            'isi' => $request->isi,
        ]);
        return new TabelTesResource($tes);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\TabelTes  $tabelTes
     * @return \Illuminate\Http\Response
     */
    public function show(TabelTes $tabelTes)
    {
        //return $tabelTes;
        return new TabelTesResource($tabelTes);
        //return TabelTes::where('id', $tabelTes)->get();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\TabelTes  $tabelTes
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, TabelTes $tabelTes)
    {
        $tabelTes->update($request->only(['isi']));
        return new TabelTesResource($tabelTes);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\TabelTes  $tabelTes
     * @return \Illuminate\Http\Response
     */
    public function destroy(TabelTes $tabelTes)
    {
        $tabelTes->delete();
        return response()->json(null, 204);
    }
}
