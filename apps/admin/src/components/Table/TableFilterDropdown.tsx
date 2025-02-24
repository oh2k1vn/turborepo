import { useState } from "react";
import { Filter } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@repo/ui/components/dropdown-menu";
import { Button } from "@repo/ui/components/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@repo/ui/components/dialog";

const filters = [
    { field: ["id", "fullName", "phone", "pGCode", "zaUserAppId"], type: "text", popup: false, isActive: true },
    { label: "Account Type", field: "type", type: "multiselect", popup: true, isActive: true },
    { label: "Group", field: "groups.keyword", type: "multiselect", popup: true, isActive: true },
    { label: "Join Brand", field: "joinBrands.keyword", type: "multiselect", popup: true, isActive: false },
    { label: "Join Campaigns", field: "joinCampaigns.keyword", type: "multiselect", popup: true, isActive: true },
    { label: "Created At", field: "createdAt", type: "daterange", popup: true, isActive: true },
    { label: "Updated At", field: "updatedAt", type: "daterange", popup: true, isActive: false },
    { label: "Status", field: "isActive", type: "radioActive", popup: true, isActive: true }
  ];
  
  type FilterType = {
    label?: string;
    field: string | string[];
    type: string;
    popup: boolean;
    isActive: boolean;
  };
  
  export default function FilterDropdown() {
      const [selectedFilter, setSelectedFilter] = useState<FilterType | null>(null);
  
      // Lọc các filters có isActive: true và popup: true
      const activePopupFilters = filters.filter(filter => filter.isActive && filter.popup);
  
      return (
          <>
              <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                      <Button variant="default">
                          Bộ lọc khác <Filter />
                      </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                      {activePopupFilters.map(filter => (
                          <DropdownMenuItem key={filter.field.toString()} onClick={() => setSelectedFilter(filter)}>
                              {filter.label || filter.field}
                          </DropdownMenuItem>
                      ))}
                  </DropdownMenuContent>
              </DropdownMenu>
  
              {/* Dialog hiển thị UI theo type */}
              <Dialog open={!!selectedFilter} onOpenChange={() => setSelectedFilter(null)}>
                  <DialogContent>
                      <DialogHeader>
                          <DialogTitle>Bộ lọc: {selectedFilter?.label || selectedFilter?.field}</DialogTitle>
                      </DialogHeader>
                      {selectedFilter?.type === "text" && <p>Component Text Filter</p>}
                      {selectedFilter?.type === "multiselect" && <p>Component MultiSelect Filter</p>}
                      {selectedFilter?.type === "daterange" && <p>Component DateRange Filter</p>}
                      {selectedFilter?.type === "radioActive" && <p>Component RadioActive Filter</p>}
                  </DialogContent>
              </Dialog>
          </>
      );
  }