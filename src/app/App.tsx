import {
  SplitLayout,
  SplitCol,
  View,
  PanelHeader,
  Panel,
} from '@vkontakte/vkui';
import { HomePage } from '@/pages/home';
import '@vkontakte/vkui/dist/vkui.css';

interface MainProps {
  initialPanel: string;
}

export function App({ initialPanel }: MainProps) {
  return (
    <SplitLayout
      style={{ justifyContent: 'center' }}
      header={<PanelHeader delimiter='none' />}
    >
      <SplitCol width='100%' stretchedOnMobile autoSpaced>
        <View activePanel={initialPanel}>
          <Panel id='main'>
            <HomePage />
          </Panel>
        </View>
      </SplitCol>
    </SplitLayout>
  );
}
