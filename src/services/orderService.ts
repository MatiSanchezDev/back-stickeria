import { supabase } from "../config/supabaseClient";
import { Order } from "../interfaces/order.interface";
import { OrderSchema } from "../models/order";

const getOrdersServices = async (page: number, limit: number) => {
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  const { data, error, count } = await supabase
    .from("orders")
    .select("*", { count: "exact" })
    .order("created_at", { ascending: false })
    .range(from, to);

  if (error) throw new Error(error.message);

  return {
    success: true,
    data,
    page,
    limit,
    total: count || 0,
    totalPages: Math.ceil((count || 0) / limit),
  };
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
