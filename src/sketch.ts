/*
 * Copyright (C) 2024 brittni and the polar bear LLC.
 *
 * This file is a part of brittni and the polar bear's p5.js TypeScript template,
 * which is released under the GNU Affero General Public License, Version 3.0.
 * You may not use this file except in compliance with the license.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. See LICENSE or go to
 * https://www.gnu.org/licenses/agpl-3.0.en.html for full license details.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU Affero General Public License for more details.
 */

import P5Lib from 'p5';

function sketch(p5: P5Lib): void {
    p5.setup = (): void => {
        p5.createCanvas(500, 500);
    }

    p5.draw = (): void => {
        p5.background(0);
        p5.ellipse(p5.mouseX, p5.mouseY, 100, 100);
    }
}

new P5Lib(sketch);
