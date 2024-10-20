use actix_web::{get, web, App, HttpServer, Responder};
use actix_files::NamedFile;
use std::io;

fn file(path: &str) -> io::Result<NamedFile> {
    Ok(NamedFile::open(format!("C:/Users/Tim/Documents/guessmyclass/front/{}", path))?)
}

#[get("/")] async fn home_root() -> impl Responder { file("home.html") }
#[get("/home")] async fn home() -> impl Responder { file("home.html") }
#[get("/leaderboard")] async fn leaderboard() -> impl Responder { file("leaderboard.html") }
#[get("/profile")] async fn profile() -> impl Responder { file("profile.html") }
#[get("/gameplay")] async fn gameplay() -> impl Responder { file("gameplay.html") }
#[get("/about")] async fn about() -> impl Responder { file("about.html") }

async fn not_found() -> io::Result<NamedFile> { file("404.html") }

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .service(home_root)
            .service(home)
            .service(leaderboard)
            .service(profile)
            .service(gameplay)
            .service(about)

            .default_service(web::route().to(not_found))
    })
    .bind(("127.0.0.1", 80))?
    .run()
    .await
}
