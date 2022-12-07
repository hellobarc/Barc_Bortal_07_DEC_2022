<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Article;
use App\Http\Resources\ContentArticleResource;

class ContentArticle extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ContentArticleResource::collection(Article::with('lesson')->get());  
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

        $lesson_id          =  $form_data['lesson_id'];
        $article_title      =  $form_data['article_title'];
        $article_content    =  $form_data['article_content'];

         // CHeck unique ness //
         $lesson_unique  = Article::where('lesson_id',$lesson_id)->count();

         $message = "Article  Already Exist in this Lesson please Update or Delete";
 
         if($lesson_unique){
             return response()->json(["status"=>"duplicate","message"=>$message]);
         }else{
            Article::create([
                'lesson_id'=> $lesson_id,
                'title'=> $article_title,
                'content'=> $article_content,
                'purpose'=>'reading'
            ]);
            $message = "Article successfully Created";
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
        $form_data = $request->input();

      //  $lesson_id          =  $form_data['lesson_id'];
        $article_title      =  $form_data['article_title'];
        $article_content    =  $form_data['article_content'];

        $article = Article::find($id);
        $article->title =   $article_title  ;
        $article->content =   $article_content  ;

        $article->save();

        $message = "Article Updaed";
        return response()->json(["status"=>"success","message"=>$message,"id"=>$id],201);  
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Article $article)
    {
        $article->delete();
        $message = "Lesson successfully Deleted";
        return response()->json(["status"=>"success","message"=>$message]);
    }
}
