import { supabase } from "../config/supabaseClient";
import { Sticker } from "../interfaces/sticker.interface";
import { StickerSchema } from "../models/item";

const getItemsServices = async () => {
  const { data, error } = await supabase.from("stickers").select("*");

  if (error) throw new Error(error.message);
  return data;
};

const getItemServices = async (id: number) => {
  const { data, error } = await supabase
    .from("stickers")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);
  return data;
};

const createItemServices = async (sticker: { name: string; price: number }) => {
  const validated = StickerSchema.parse(sticker);
  const { data, error } = await supabase
    .from("stickers")
    .insert([validated])
    .select(); // Para retornar el item agreado.;
  if (error) throw new Error(error.message);
  return data;
};

const updateItemServices = async (id: number, update: Partial<Sticker>) => {
  const validated = StickerSchema.parse(update);
  const { data, error } = await supabase
    .from("stickers")
    .update([validated])
    .eq("id", id)
    .select();
  if (error) throw new Error(error.message);
  return data;
};

const deleteItemServices = async (id: number) => {
  const { data, error } = await supabase
    .from("stickers")
    .delete()
    .eq("id", id)
    .select();
  if (error) throw new Error(error.message);
  return data;
};

export {
  getItemsServices,
  getItemServices,
  createItemServices,
  updateItemServices,
  deleteItemServices,
};
