import SearchInput2 from '@/shared/ui/SearchInput2';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/shadcnUI/dialog'

export const CompanySettingsPage = () =>{

  return (

    <div className="flex flex-col w-full min-h-screen h-full justify-center items-center">
      <SearchInput2 />
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}


export default   CompanySettingsPage 