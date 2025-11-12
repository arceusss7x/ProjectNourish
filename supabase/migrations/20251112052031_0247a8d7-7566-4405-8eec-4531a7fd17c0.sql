-- Create donors table
CREATE TABLE public.donors (
  donor_id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  donor_name TEXT NOT NULL,
  donor_type TEXT NOT NULL,
  contact_number TEXT,
  email TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create food_items table
CREATE TABLE public.food_items (
  food_id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  item_name TEXT NOT NULL,
  donor_id UUID REFERENCES public.donors(donor_id),
  quantity INTEGER NOT NULL,
  unit TEXT NOT NULL,
  expiry_date DATE,
  donation_date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create storage table
CREATE TABLE public.storage (
  storage_id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  location TEXT NOT NULL,
  capacity INTEGER NOT NULL,
  current_stock INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create distribution_events table
CREATE TABLE public.distribution_events (
  event_id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  event_date TIMESTAMP WITH TIME ZONE NOT NULL,
  location TEXT NOT NULL,
  organized_by TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create distribution_details table
CREATE TABLE public.distribution_details (
  detail_id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  event_id UUID NOT NULL REFERENCES public.distribution_events(event_id),
  food_id UUID NOT NULL REFERENCES public.food_items(food_id),
  quantity_distributed INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.donors ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.food_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.storage ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.distribution_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.distribution_details ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for donors
CREATE POLICY "Admins can view all donors"
  ON public.donors FOR SELECT
  USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can insert donors"
  ON public.donors FOR INSERT
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update donors"
  ON public.donors FOR UPDATE
  USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete donors"
  ON public.donors FOR DELETE
  USING (has_role(auth.uid(), 'admin'::app_role));

-- Create RLS policies for food_items
CREATE POLICY "Admins can view all food items"
  ON public.food_items FOR SELECT
  USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can insert food items"
  ON public.food_items FOR INSERT
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update food items"
  ON public.food_items FOR UPDATE
  USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete food items"
  ON public.food_items FOR DELETE
  USING (has_role(auth.uid(), 'admin'::app_role));

-- Create RLS policies for storage
CREATE POLICY "Admins can view all storage"
  ON public.storage FOR SELECT
  USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can insert storage"
  ON public.storage FOR INSERT
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update storage"
  ON public.storage FOR UPDATE
  USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete storage"
  ON public.storage FOR DELETE
  USING (has_role(auth.uid(), 'admin'::app_role));

-- Create RLS policies for distribution_events
CREATE POLICY "Admins can view all distribution events"
  ON public.distribution_events FOR SELECT
  USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can insert distribution events"
  ON public.distribution_events FOR INSERT
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update distribution events"
  ON public.distribution_events FOR UPDATE
  USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete distribution events"
  ON public.distribution_events FOR DELETE
  USING (has_role(auth.uid(), 'admin'::app_role));

-- Create RLS policies for distribution_details
CREATE POLICY "Admins can view all distribution details"
  ON public.distribution_details FOR SELECT
  USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can insert distribution details"
  ON public.distribution_details FOR INSERT
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update distribution details"
  ON public.distribution_details FOR UPDATE
  USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete distribution details"
  ON public.distribution_details FOR DELETE
  USING (has_role(auth.uid(), 'admin'::app_role));