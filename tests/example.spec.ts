import { test, expect } from '@playwright/test';

test('トップページに Laravel 見出しが表示される', async ({ page }) => {
  await page.goto('/');

  // ― A案: 最初の一致だけチェック ―
  await expect(page.getByText('Laravel').first()).toBeVisible();

  // ― B案: 見出しレベルで特定する例 ―
  // await expect(page.getByRole('heading', { name: 'Laravel' })).toBeVisible();
});