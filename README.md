# Laravel × Docker × Playwright スターターテンプレート

Laravel 10 / PHP-FPM 8.1 を **WSL 2（Ubuntu 22.04）** 上で “爆速” 構築するハンズオン用リポジトリです。  
E2E テストは **Playwright 1.53.1**（Chromium・Firefox・WebKit）を Docker コンテナで実行します。

---

## 📦 主要スタック

| 役割 | サービス | バージョン | 備考 |
|------|----------|-----------|------|
| アプリ | **app** | PHP 8.1 / Laravel 10 | `infra/php/Dockerfile` |
| Web サーバー | **web** | nginx 1.20-alpine | `infra/nginx/default.conf` |
| DB | **db** | MySQL 8.0 | `MYSQL_USER=phper / secret` |
| E2E テスト | **e2e** | Playwright 1.53.1 | `infra/playwright/Dockerfile` |

---

## 🏗️ クイックスタート

> **前提** :  
> - WSL 2 + Docker Engine が動作している  
> - Node.js 18 以上／npm がホスト側に入っている

```bash
git clone https://github.com/<YOUR_ACCOUNT>/laravel-docker-wsl2-starter.git Laravel
cd Laravel

# ① Node 依存（Playwright）をホスト側にインストール
npm ci

# ② Docker イメージをビルドして起動
docker compose build
docker compose up -d web db app

# ③ Laravel 初期化
docker compose exec app composer install
docker compose exec app cp .env.example .env
docker compose exec app php artisan key:generate
docker compose exec app php artisan migrate

# ④ E2E テスト実行（3ブラウザ並列）
docker compose run --rm e2e
