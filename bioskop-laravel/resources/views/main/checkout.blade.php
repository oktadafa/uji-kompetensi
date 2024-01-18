@extends('layout.index')
@section('content')
<div class="container mt-5">
    <div class="contaier-fluid card p-3 shadow">
        <h3 class="text-center">Konfirmasi Pemesanan Tiket</h3>
        <div class="info">
            <small>Judul : {{ $jadwal->films->judul }}</small><br>
            <small>Ruang : {{ $jadwal->ruangs->nama_ruang }}</small><br>
            <small>Waktu Tayang : {{ $jadwal->tanggal_tayang }}, {{ $jadwal->jam_tayang }} WIB</small><br>

        </div>
        <form method="post" action="/checkout">
            @csrf
        <div class="my-3">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Jumlah Tiket</th>
                    <th scope="col">Nomor Kursi</th>
                    <th scope="col">Harga Tiket</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($nomor_kursi as $kursi)
                <tr>
                    <th scope="row">1</th>
                    <td>{{ $kursi }}</td>
                    <td> Rp.{{ intval($jadwal->harga_tiket) }}</td>
                </tr>
                    <input type="hidden" name="nomor_kursi[]" value="{{ $kursi }}">
                @endforeach
                <tfoot>
        <th colspan="2">Total</th>
        <th>Rp.{{ $jadwal->harga_tiket * count($nomor_kursi) }}</th>
    </tfoot>
</tbody>
</table>
</div>
    <input type="hidden" name="jadwalFilm_id" value="{{ $jadwal->id }}">
    <button class="btn btn-primary">Bayar</button>
</form>
</div>
</div>

@endsection
