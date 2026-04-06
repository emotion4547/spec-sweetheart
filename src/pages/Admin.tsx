import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table, TableHeader, TableBody, TableHead, TableRow, TableCell,
} from "@/components/ui/table";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { LogOut, RefreshCw, Trash2 } from "lucide-react";

interface Request {
  id: string;
  name: string;
  phone: string | null;
  email: string | null;
  service: string | null;
  profession: string | null;
  status: string;
  created_at: string;
}

const statusLabels: Record<string, string> = {
  new: "Новая",
  in_progress: "В работе",
  done: "Завершена",
  rejected: "Отклонена",
};

const statusColors: Record<string, string> = {
  new: "bg-blue-500/10 text-blue-600 border-blue-200",
  in_progress: "bg-yellow-500/10 text-yellow-600 border-yellow-200",
  done: "bg-green-500/10 text-green-600 border-green-200",
  rejected: "bg-red-500/10 text-red-600 border-red-200",
};

const Admin = () => {
  const [requests, setRequests] = useState<Request[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  const fetchRequests = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("requests")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast({ title: "Ошибка", description: error.message, variant: "destructive" });
    } else {
      setRequests(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    // Check auth
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate("/admin/login");
        return;
      }
      fetchRequests();
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session) navigate("/admin/login");
    });

    return () => subscription.unsubscribe();
  }, []);

  const updateStatus = async (id: string, status: string) => {
    const { error } = await supabase
      .from("requests")
      .update({ status })
      .eq("id", id);

    if (error) {
      toast({ title: "Ошибка", description: error.message, variant: "destructive" });
    } else {
      setRequests((prev) => prev.map((r) => (r.id === id ? { ...r, status } : r)));
      toast({ title: "Статус обновлён" });
    }
  };

  const deleteRequest = async (id: string) => {
    const { error } = await supabase.from("requests").delete().eq("id", id);
    if (error) {
      toast({ title: "Ошибка", description: error.message, variant: "destructive" });
    } else {
      setRequests((prev) => prev.filter((r) => r.id !== id));
      toast({ title: "Заявка удалена" });
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-foreground">Заявки с сайта</h1>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" onClick={fetchRequests} disabled={loading}>
            <RefreshCw size={16} className={loading ? "animate-spin" : ""} />
            Обновить
          </Button>
          <Button variant="ghost" size="sm" onClick={handleLogout}>
            <LogOut size={16} />
            Выйти
          </Button>
        </div>
      </header>

      <main className="p-6">
        <div className="mb-4 text-sm text-muted-foreground">
          Всего заявок: {requests.length}
        </div>

        {requests.length === 0 && !loading ? (
          <div className="text-center py-20 text-muted-foreground">Заявок пока нет</div>
        ) : (
          <div className="border border-border rounded-xl overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Дата</TableHead>
                  <TableHead>Имя</TableHead>
                  <TableHead>Телефон</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Услуга</TableHead>
                  <TableHead>Профессия</TableHead>
                  <TableHead>Статус</TableHead>
                  <TableHead className="w-12"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {requests.map((r) => (
                  <TableRow key={r.id}>
                    <TableCell className="whitespace-nowrap text-sm">
                      {new Date(r.created_at).toLocaleDateString("ru-RU", {
                        day: "2-digit", month: "2-digit", year: "numeric",
                        hour: "2-digit", minute: "2-digit",
                      })}
                    </TableCell>
                    <TableCell className="font-medium">{r.name}</TableCell>
                    <TableCell>{r.phone || "—"}</TableCell>
                    <TableCell>{r.email || "—"}</TableCell>
                    <TableCell>{r.service || "—"}</TableCell>
                    <TableCell>{r.profession || "—"}</TableCell>
                    <TableCell>
                      <Select value={r.status} onValueChange={(v) => updateStatus(r.id, v)}>
                        <SelectTrigger className="w-[140px] h-8 text-xs">
                          <SelectValue>
                            <Badge variant="outline" className={statusColors[r.status]}>
                              {statusLabels[r.status] || r.status}
                            </Badge>
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                          {Object.entries(statusLabels).map(([value, label]) => (
                            <SelectItem key={value} value={value}>{label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon" onClick={() => deleteRequest(r.id)} className="text-destructive hover:text-destructive">
                        <Trash2 size={16} />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </main>
    </div>
  );
};

export default Admin;
