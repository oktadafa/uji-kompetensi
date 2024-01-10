@extends('layout.index')
@section('content')
@if(Session::has('success'))
  <div class="alert alert-success alert-dismissible fade show" role="alert">
  <strong>{{ session('success') }}</strong>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
@endif
    <div class="container p-5 card mt-5">
        <h2 class="text-center">Daftar Tiket</h2>
<table class="table mt-3">
  <thead>
    <tr>
        <th scope="col">Nomor Tiket</th>
        <th scope="col">Nama Ruang</th>
        <th scope="col">Nomor Kursi</th>
        <th scope="col">Judul Film</th>
      <th scope="col">Waktu Pemesanan</th>
      <th scope="col">Waktu Tayang</th>
      <th scope="col">Jam Tayang</th>
    </tr>
  </thead>
  <tbody>
    @if(count($tiket->pemesanan_tiket) < 1)
        <tr>
            <td colspan="7" class="text-center py-5 fs-4">Kamu Belum Memesan Tiket</td>
        </tr>
    @else

    @endif
    @foreach($tiket->pemesanan_tiket as $tiket)
    <tr>
        <td scope="row">{{ $tiket->nomor_tiket }}</td>
        <td>{{ $tiket->jadwalFilms->ruangs->nama_ruang }}</td>
        <td>{{ $tiket->nomor_kursi }}</td>
        <td>{{ $tiket->jadwalFilms->films->judul }}</td>
        <td>{{ explode(' ',$tiket->created_at)[0] }}</td>
        <td>{{ $tiket->jadwalFilms->tanggal_tayang }} </td>
        <td>{{ $tiket->jadwalFilms->jam_tayang }} WIB</td>
    </tr>
    @endforeach
  </tbody>
</table>
    </div>
@endsection
