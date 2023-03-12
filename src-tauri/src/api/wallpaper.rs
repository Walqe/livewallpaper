use crate::{api::settings::settings_load_wallpaper, render::mpv_player::MpvPlayer};
use crate::{wallpaper_manager::Wallpaper, wallpaper_manager::WallpaperManager};
#[tauri::command]
pub async fn wallpaper_open(param: Wallpaper) -> Result<bool, String> {
    let mut mpv_player = MpvPlayer::new();
    mpv_player.launch(Some(&param.path)).await;
    Ok(true)
}

#[tauri::command]
pub async fn wallpaper_close(screen_index: i32) -> Result<bool, String> {
    Ok(true)
}

#[tauri::command]
pub async fn wallpaper_get_list() -> Result<Vec<Wallpaper>, String> {
    let config = settings_load_wallpaper().map_err(|e| {
        println!("settings_load_wallpaper error:{}", e.to_string());
        e.to_string()
    })?;
    println!("config:{:?}", config.paths);

    let mut res = Vec::new();
    for path in config.paths {
        let mut wallpapers = WallpaperManager::get_wallpapers(&path).map_err(|e| {
            println!("get_wallpapers error:{}", e.to_string());
            e.to_string()
        })?;
        res.append(&mut wallpapers);
    }
    println!("res:{:?}", res);
    Ok(res)
}
