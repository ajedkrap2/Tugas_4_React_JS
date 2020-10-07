import React, { Component } from 'react';

import ListMakanan from "../ListData/ListMakanan"

import NasiKentut from "../Assets/nasi-kentut.webp"
import NasiKuning from "../Assets/nasi-kuning.jpg"
import NasiPadang from "../Assets/nasi-padang.jpg"
import SateAyam from "../Assets/sate.png"
import SotoLamongan from "../Assets/sotolamongan.png"

class MenuMakanan extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pesan: "",
      jumlah: 0,
      tampil: false
    }
    this.pilihPesanan = this.pilihPesanan.bind(this)
    this.nasipadang = this.nasipadang.bind(this)
    this.sate = this.sate.bind(this)
    this.soto = this.soto.bind(this)
    this.uduk = this.uduk.bind(this)
    this.kuning = this.kuning.bind(this)
    this.batal = this.batal.bind(this)
  }

  pilihPesanan(value, e) {
    let output = e.target.value
    this.setState({
      [value]: value === "jumlah" ? parseInt(output) : output,
      tampil: true
    })
  }
  // pilihPesanan(value, e) {
  //   // console.log(typeof e.target.value, value)
  //   if (e.target.value !== "" || !isNaN(parseInt(e.target.value))) {
  //     this.setState({
  //       [value]: value === "jumlah" ? this.state.jumlah + parseInt(e.target.value) : e.target.value,
  //       tampil: true
  //     })
  //   }
  //   else {
  //     this.setState({
  //       pesan: "",
  //       tampil: false
  //     })
  //   }
  // }

  nasipadang() {
    this.setState(state => {
      return {
        pesan: "Nasi Padang",
        jumlah: state.jumlah++,
        tampil: true
      }
    })
  }
  sate() {
    this.setState(state => {
      return {
        pesan: "Sate",
        jumlah: state.jumlah++,
        tampil: true
      }
    })
  }
  soto() {
    this.setState(state => {
      return {
        pesan: "Soto Ayam Lamongan",
        jumlah: state.jumlah++,
        tampil: true
      }
    })
  }
  uduk() {
    this.setState(state => {
      return {
        pesan: "Nasi Uduk",
        jumlah: state.jumlah++,
        tampil: true
      }
    })
  }
  kuning() {
    this.setState(state => {
      return {
        pesan: "Nasi Kuning",
        jumlah: state.jumlah++,
        tampil: true
      }
    })
  }
  batal() {
    let input = document.getElementsByTagName("input")
    for (let x = 0; x < input.length; x++) {
      input[x].value = null
    }
    this.setState({
      pesan: "",
      jumlah: 0,
      tampil: false
    })
  }

  render() {
    return (
      <div>
        <h3>Daftar Makanan yang disediakan : </h3>
        <table>
          <tbody>
            <tr>
              <td>
                <ListMakanan pic={NasiPadang} />
                <center>
                  <button onClick={() => this.nasipadang()}>Pesan Makanan</button>
                </center>
              </td>
              <td>
                <ListMakanan pic={SateAyam} />
                <center>
                  <button onClick={() => this.sate()}>Pesan Makanan</button>
                </center>
              </td>
              <td>
                <ListMakanan pic={SotoLamongan} />
                <center>
                  <button onClick={() => this.soto()}>Pesan Makanan</button>
                </center>
              </td>
              <td>
                <ListMakanan pic={NasiKentut} />
                <center>
                  <button onClick={() => this.uduk()}>Pesan Makanan</button>
                </center>
              </td>
              <td>
                <ListMakanan pic={NasiKuning} />
                <center>
                  <button onClick={() => this.kuning()}>Pesan Makanan</button>
                </center>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <input
          type="text"
          placeholder="Masukan Pesanan Anda"
          onChange={e => this.pilihPesanan("pesan", e)}
        />
        <input
          type="number"
          placeholder="Jumlah Pesanan"
          onChange={e => this.pilihPesanan("jumlah", e)}
        />
        <button onClick={() => this.batal()}>Batalkan Pesanan</button>
        {this.state.tampil === true ? (
          <div>
            <h3>Pesanan Anda : {this.state.pesan}</h3>
            <h4>Jumlah Pesanan : {this.state.jumlah}</h4>
          </div>
        ) : (
            <div>
              <center>Anda Belum Memesan</center>
            </div>
          )
        }
      </div>
    );
  }
}


export default MenuMakanan;
