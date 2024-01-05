@extends('layout.index')
@section('content')
<div class="container-fluid p-5 text-light" style="background-color: #006d77">
    @for($j = 0; $j < 10; $j++)
    <div class="col-12 d-flex flex-wrap justify-content-center">
        @for($i = 0; $i < 10; $i++)
        <div class="box border {{ $i === 5 ? "ms-5" : "" }} bg-light mx-2 my-2 text-dark " style="width:50px;">
            <label for="set">
                <p>{{ $id_kursi[$j] }} {{ $i+1 }}</p>
                <input type="checkbox" name="set" class="d-none" id="set">
            </label>
        </div>
        @endfor
    </div>
    @endfor
</div>
@endsection
