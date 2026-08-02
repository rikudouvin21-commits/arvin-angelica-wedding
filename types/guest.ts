export type Guest = {
  id: string;

  invitation_id: string;

  full_name: string;

  nickname: string | null;

  display_order: number;

  is_child: boolean;

  created_at: string;
};
