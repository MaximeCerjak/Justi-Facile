import { test, expect } from '@playwright/test';
import { AxeBuilder } from '@axe-core/playwright';

const routes = [
  { path: '/', name: 'Accueil' },
  { path: '/services', name: 'Services' },
  { path: '/about', name: 'À propos' }
];

for (const route of routes) {
  test(`Accessibilité - ${route.name}`, async ({ page }) => {
    await page.goto(`http://localhost:4173${route.path}`);

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa']) // facultatif
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
}