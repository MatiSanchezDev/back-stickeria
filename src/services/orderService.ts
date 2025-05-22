import { supabase } from "../config/supabaseClient";
import { Order } from "../interfaces/order.interface";
import { OrderSchema } from "../models/order";

const getOrdersServices = async () => {
  const { data, error } = await supabase.from("orders").select("*");

  if (error) throw new Error(error.message);
  return data;
};

const getOrderServices = async (id: number) => {
  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);
  return data;
};

const createOrderServices = async (order: Order) => {
  const validated = OrderSchema.parse(order);
  const { data, error } = await supabase
    .from("orders")
    .insert([validated])
    .select(); // Para retornar el item agreado.;
  if (error) throw new Error(error.message);
  return data;
};

const updateOrderServices = async (id: number, update: Partial<Order>) => {
  const validated = OrderSchema.parse(update);
  const { data, error } = await supabase
    .from("orders")
    .update(validated)
    .eq("id", id)
    .select();
  if (error) throw new Error(error.message);
  return data;
};

const deleteOrderServices = async (id: number) => {
  const { data, error } = await supabase
    .from("orders")
    .delete()
    .eq("id", id)
    .select();
  if (error) throw new Error(error.message);
  return data;
};

export {
  getOrdersServices,
  getOrderServices,
  createOrderServices,
  updateOrderServices,
  deleteOrderServices,
};
