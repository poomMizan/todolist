<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon; 
// use Illuminate\Support\Facades\DB;
// use App\Models\User;
// use Illuminate\Support\Facades\Auth;

class ItemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct()
    {
        // $this->middleware('auth')->except(['index']);
    }
    public function index()
    {
        return Item::orderBy('created_at', 'desc')->get();
        // foreach($items as $item) {
        //     $item->created_at = $item->created_at->format('jS F Y h:i:s A');
        // }
   
        // DB::select('DELETE FROM items');
        // DB::select('ALTER TABLE items AUTO_INCREMENT = 1');
        // return "All data deleted and AUTO_INCREMENT = 1";
        // $users = User::all();
        // return $users;
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
        // $newTtems = new Item();
        // $newItem->name = $request->get('name');
        // $newItem->save();
        // return $newItem;        
        $request->validate([
            'name' => [
                'required',
                'String',
                'email',
                'unique:items',
                'min:5',
                'max:50'
            ],
        ]);
        //* *// if (Auth::check()) 
        // {
            // $newItem = new Item();
            // $newItem->name = $request->get('name');
            // $newItem->save();
            
            // another way to store data
            $newItem = Item::create(['name' => $request->get('name')]);        
            return $newItem;
        //* *// } 
        //* *// return "need login";
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
        $items = Item::findOrFail($id);
        return $items;
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update($id)
    {   //
        $item = Item::findOrFail($id);

        if ( $item  /*&& Auth::check()*/)  
        {
            $item->is_completed = !$item->is_completed;
            $item->completed_at = ($item->is_completed) ? Carbon::now() : null;
            
            // $item->is_completed = $request->get('is_completed') ? true : false;
            // $item->completed_at = $request->get('is_completed') ? Carbon::now() : null;
            $item->save();

            return $item;
        }
        return "No Item found";
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
        $item = Item::findOrFail($id);
        if ( $item )
        {
            $item->delete();
            return $item;
        }
        return "No Item found";
    } 
}