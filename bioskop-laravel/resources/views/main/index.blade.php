@extends('layout.index')
@section('content')
<div class="container-fluid p-5 ">
    <h1 class="text-center mb-3">Daftar Film</h1>
    <hr>
    <div class="d-flex border-bottom">
    <div class="row p-4 d-flex">
        <h2>Hari Ini</h2>
        @if(count($films_now) < 1)
        <div class="p-4 col-md-12 text-center">
            <h4 class="text-center">Tidak Ada Film</h4>
        </div>
        @endif
        @foreach ($films_now as $item)
        <div class="col mt-4 text-center">
            <div style="width: 15rem;">
                <img src="{{ $item->image_url }}" class="card-img-top rounded" alt="...">
                <a class="fs-5 text-decoration-none text-dark" href="/film/{{ $item->id }}">{{ $item->judul }}</a>
            </div>
        </div>
        @endforeach
    </div>
    </div>
      <div class="d-flex border-bottom">
    <div class="row p-4 d-flex">
        <h2>Akan Datang</h2>
        @foreach ($films_coming_soon as $item)
        <div class="col mt-4 text-center">
            <div style="width: 15rem;">
                <img src="{{ $item->image_url }}" class="card-img-top rounded" >
                <a class="fs-5 text-decoration-none text-dark" href="/film/{{ $item->id }}">{{ $item->judul }}</a>
            </div>
        </div>
        @endforeach
    </div>
    </div>

</div>
@endsection
