import {
  SplitLayout,
  SplitCol,
  View,
  PanelHeader,
  Panel,
} from '@vkontakte/vkui';
import { GroupsPage } from '@/pages/groups';
import { modal } from './modal';

interface MainProps {
  initialPanel: string;
}

export function App({ initialPanel }: MainProps) {
  return (
    <SplitLayout
      style={{ justifyContent: 'center' }}
      header={<PanelHeader delimiter='none' />}
      modal={modal}
    >
      <SplitCol width='100%' stretchedOnMobile autoSpaced>
        <View activePanel={initialPanel}>
          <Panel id='groups'>
            <GroupsPage />
          </Panel>
        </View>
      </SplitCol>
    </SplitLayout>
  );
}
