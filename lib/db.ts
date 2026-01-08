import fs from 'fs';
import path from 'path';
import { bundles, Bundle } from './bundles';

const DB_PATH = path.join(process.cwd(), 'db.json');

export interface Product extends Bundle {
    // Extending bundle to match our needs
}

export interface CartItem {
    id: string;
    productId: string;
    quantity: number;
}

export interface Cart {
    id: string;
    items: CartItem[];
}

export interface Database {
    products: Product[];
    carts: Cart[];
}

// Initialize DB if not exists
function initDB() {
    if (!fs.existsSync(DB_PATH)) {
        const initialData: Database = {
            products: bundles, // Seed with initial bundles
            carts: []
        };
        fs.writeFileSync(DB_PATH, JSON.stringify(initialData, null, 2));
    }
}

export function readDB(): Database {
    initDB();
    const data = fs.readFileSync(DB_PATH, 'utf-8');
    try {
        return JSON.parse(data);
    } catch (e) {
        return { products: [], carts: [] };
    }
}

export function writeDB(data: Database) {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

// Helpers
export function getProducts() {
    const db = readDB();
    // Ensure seeding if empty (optional safety)
    if (db.products.length === 0) {
        db.products = bundles;
        writeDB(db);
    }
    return db.products;
}

export function getProduct(id: string) {
    const products = getProducts();
    return products.find(p => p.id === id);
}

export function getCart() {
    const db = readDB();
    // For this demo, always return the first cart or create one
    if (db.carts.length === 0) {
        const newCart: Cart = { id: 'default-cart', items: [] };
        db.carts.push(newCart);
        writeDB(db);
        return newCart;
    }
    return db.carts[0];
}

export function addToCart(productId: string, quantity: number) {
    const db = readDB();
    let cart = db.carts[0];
    if (!cart) {
        cart = { id: 'default-cart', items: [] };
        db.carts.push(cart);
    }

    const existingItem = cart.items.find(item => item.productId === productId);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.items.push({
            id: Math.random().toString(36).substring(7),
            productId,
            quantity
        });
    }
    writeDB(db);
    return cart;
}

export function removeFromCart(itemId: string) {
    const db = readDB();
    const cart = db.carts[0];
    if (cart) {
        cart.items = cart.items.filter(item => item.id !== itemId);
        writeDB(db);
    }
    return cart;
}

export function clearCart() {
    const db = readDB();
    const cart = db.carts[0];
    if (cart) {
        cart.items = [];
        writeDB(db);
    }
    return cart;
}
