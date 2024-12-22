import { defineStore } from 'pinia'

export const useColorGeneration = defineStore('colorgen', () => {
    const hslToHex = (h, s, l) => {
        l /= 100
        const a = (s * Math.min(l, 1 - l)) / 100
        const f = n => {
            const k = (n + h / 30) % 12
            const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
            return Math.round(255 * color)
                .toString(16)
                .padStart(2, '0')
        }
        return `#${f(0)}${f(8)}${f(4)}`
    }

    const colorDifference = (color1, color2) => {
        const hexToRgb = hex => {
            const bigint = parseInt(hex.slice(1), 16)
            const r = (bigint >> 16) & 255
            const g = (bigint >> 8) & 255
            const b = bigint & 255
            return { r, g, b }
        }

        const rgb1 = hexToRgb(color1)
        const rgb2 = hexToRgb(color2)

        return Math.sqrt(
            Math.pow(rgb1.r - rgb2.r, 2) +
                Math.pow(rgb1.g - rgb2.g, 2) +
                Math.pow(rgb1.b - rgb2.b, 2),
        )
    }

    const generateRandomColor = () => {
        const hue = Math.floor(Math.random() * 360)
        const saturationPrimary = 50
        const lightnessPrimary = 95
        const saturationSecondary = 85
        const lightnessSecondary = 40

        const colors = {
            primary: hslToHex(
                hue,
                saturationPrimary,
                lightnessPrimary,
            ).toUpperCase(),
            secondary: hslToHex(
                hue,
                saturationSecondary,
                lightnessSecondary,
            ).toUpperCase(),
        }

        return { colors }
    }

    return {
        generateRandomColor,
        colorDifference,
    }
})
