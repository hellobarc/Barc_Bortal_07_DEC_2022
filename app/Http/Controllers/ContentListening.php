<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ListeningTrack;
use App\Http\Resources\ListeningTrackResource;

class ContentListening extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ListeningTrackResource::collection(ListeningTrack::with('lesson')->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $form_data = $request->input();

        //['lesson_id','title','description','image','file_name','file_path','file_extension','purpose'];

        $lesson_id          =  $form_data['lesson_id'];
        $title      =  $form_data['title'];
        $description    =  $form_data['description'];

         // CHeck unique ness //
         $lesson_unique  = ListeningTrack::where('lesson_id',$lesson_id)->count();

         $message = "Track  Already Exist in this Lesson please Update or Delete";
 
         if($lesson_unique){
             return response()->json(["status"=>"duplicate","message"=>$message]);
         }else{

            try{
                if($request->hasFile('track')){
                    $file = $request->file('track');

                    $file_name = time().'-'.$file->getClientOriginalName();
                    $file_ext = $file->getClientOriginalExtension();
                    $file_path = $file->getRealPath();
                    $file_size = $file->getSize();
    
                    $file->move(public_path('listening_track'), $file_name);
    

                    ListeningTrack::create([
                        'lesson_id'=> $lesson_id,
                        'title'=> $title,
                        'file_name'=> $file_name,
                        'file_path'=> $file_path,
                        'file_extension'=> $file_ext,
                        'description'=> $description,
                        'purpose'=> 'Listening'
                    ]);
    
                }
            }catch(Throwable $e){
                 return response()->json(['message'=>$e->getMessage()]);
            }

        
            $message = "Track successfully Created";
            return response()->json(["status"=>"success","message"=>$message],201);
         }
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
}
