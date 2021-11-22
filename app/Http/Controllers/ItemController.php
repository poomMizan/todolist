<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Carbon; 

class ItemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return Item::orderBy('created_at', 'desc')->get();

        /* Delete Data */
        // Item::where('id', 3)->delete();
        // return "delete completed";    
        /* Reset Auto Increment */

        // DB::select('ALTER TABLE items AUTO_INCREMENT = 1');
        // return "new auto increment!";
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
        
        $newItem = new Item();
        $newItem->name = $request->get('name');
        $newItem->save();

        return $newItem;
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
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
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
        $item = Item::findOrFail( $id );

        if ( $item )  
        {
            $item->is_completed = !$item->is_completed;
            $item->completed_at = ($item->is_completed) ? now() : null;

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
