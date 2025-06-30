# 公式 Playwright イメージ（バージョンは必要に応じて更新）
FROM mcr.microsoft.com/playwright:v1.53.1-jammy

# node_modules キャッシュ専用ディレクトリ
WORKDIR /e2e

# Playwright の依存をインストール
COPY package.json package-lock.json* pnpm-lock.yaml* ./
RUN npm ci --ignore-scripts

# テストコードと設定をコピー
COPY . .

# デフォルトのエントリ
ENTRYPOINT ["npx", "playwright", "test"]
