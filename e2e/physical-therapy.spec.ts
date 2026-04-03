import { test, expect } from '@playwright/test'

test.describe('Physical Therapy Starter - Non-Demo Mode', () => {

  test('homepage loads with Drupal content', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Physical Therapy/i)
    // Hero title from Drupal content
    await expect(page.locator('h1')).toContainText('Move Better')
    // CTA section
    await expect(page.locator('text=Explore Services')).toBeVisible()
  })

  test('services listing page shows all services', async ({ page }) => {
    await page.goto('/services')
    await expect(page.locator('h1')).toContainText('Services')
    await expect(page.getByRole('heading', { name: 'Orthopedic Rehabilitation' })).toBeVisible()
    await expect(page.getByRole('heading', { name: /Sports Medicine/ })).toBeVisible()
    await expect(page.getByRole('heading', { name: /Spine/ })).toBeVisible()
    await expect(page.getByRole('heading', { name: /Balance/ })).toBeVisible()
  })

  test('service detail page renders', async ({ page }) => {
    await page.goto('/services/orthopedic-rehabilitation')
    await expect(page.locator('h1')).toContainText('Orthopedic Rehabilitation')
  })

  test('team listing page shows therapists', async ({ page }) => {
    await page.goto('/team')
    await expect(page.locator('h1')).toContainText('Therapists')
    await expect(page.getByRole('heading', { name: /Sarah Mitchell/ })).toBeVisible()
    await expect(page.getByRole('heading', { name: /Marcus Chen/ })).toBeVisible()
    await expect(page.getByRole('heading', { name: /Elena Rodriguez/ })).toBeVisible()
  })

  test('therapist detail page renders', async ({ page }) => {
    await page.goto('/therapists/sarah-mitchell')
    await expect(page.locator('h1')).toContainText('Sarah Mitchell')
  })

  test('conditions listing page shows conditions', async ({ page }) => {
    await page.goto('/conditions')
    await expect(page.locator('h1')).toContainText('Conditions')
    await expect(page.getByRole('heading', { name: 'Lower Back Pain' })).toBeVisible()
    await expect(page.getByRole('heading', { name: /Knee Injuries/ })).toBeVisible()
    await expect(page.getByRole('heading', { name: /Shoulder Pain/ })).toBeVisible()
    await expect(page.getByRole('heading', { name: /Neck Pain/ })).toBeVisible()
  })

  test('condition detail page renders', async ({ page }) => {
    await page.goto('/conditions/lower-back-pain')
    await expect(page.locator('h1')).toContainText('Lower Back Pain')
  })

  test('about page renders', async ({ page }) => {
    await page.goto('/about')
    await expect(page.locator('h1')).toContainText('About Peak Performance')
  })

  test('navigation links work', async ({ page }) => {
    await page.goto('/')
    await page.click('text=Services', { strict: false })
    await expect(page).toHaveURL(/\/services/)
  })
})
