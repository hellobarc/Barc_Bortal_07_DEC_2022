<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ImageGallery;

class ImageGalleryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    { 
        $gallery =  ImageGallery::all();
        return response()->json($gallery,202, [
            'Content-Type' => 'application/json',
            'Charset' => 'utf-8'
        ],JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }


// CUstom 
    public function congratulation_image()
    { 
        $gallery =  ImageGallery::where('album_id',1)->inRandomOrder()->take(1)->get();
        return response()->json($gallery,202, [
            'Content-Type' => 'application/json',
            'Charset' => 'utf-8'
        ],JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    }

    // Coffee
    public function coffee_image()
    { 
        $gallery =  ImageGallery::where('album_id',2)->inRandomOrder()->take(1)->get();
        return response()->json($gallery,202, [
            'Content-Type' => 'application/json',
            'Charset' => 'utf-8'
        ],JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    }
}
