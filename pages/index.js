import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Form Tidak Solat Jumat</title>
        <link rel="icon" href="/cirno.png" />
        <meta
          name="description"
          content="Form untuk yang tidak solat jumat 🙏"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="container">
        <header className="header">
          <h1 id="title" className="text-center">
            Form Tidak Solat Jumat
          </h1>
          <p id="description" className="description text-center">
            mau kena satir kah cuy ?
          </p>
        </header>
        <form id="survey-form">
          <div className="form-group">
            <label id="name-label">Nama</label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              placeholder="Tulis nama mu coy"
              required
            />
          </div>
          <div className="form-group">
            <label id="email-label">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              placeholder="Phising ni coy 😎"
              required
            />
          </div>
          <div className="form-group">
            <label>Tanggal</label>
            <input
              className="form-control"
              type="date"
              id="date"
              name="Tanggal"
            />
          </div>

          <div className="form-group">
            <p>Kenapa gak solat jumat ?</p>
            <textarea
              id="comments"
              className="input-textarea"
              name="comment"
              placeholder="kenapa coy ?"
            ></textarea>
          </div>

          <div className="form-group">
            <button type="submit" id="submit" className="submit-button">
              Submit
            </button>
          </div>
        </form>

        <div className="copireg">
          <p>© 2022 Rumah Phogam</p>
          <p>
            Build by{" "}
            <Link
              href="https://www.instagram.com/v____v______v/"
              target="_blank"
            >
              <a className="author">Niv</a>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
