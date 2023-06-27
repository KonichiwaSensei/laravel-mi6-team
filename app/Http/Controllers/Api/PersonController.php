<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Person;
use Illuminate\Http\Request;


class PersonController extends Controller
{
    public function index()
    {
        $people = Person::orderBy('id')->get();

        return $people;
    }

    public function show($personId)
    {
        $person = Person::with(['image'])->find($personId);

        return $person;
    }
}
